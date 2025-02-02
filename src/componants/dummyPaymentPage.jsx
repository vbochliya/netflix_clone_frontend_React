import axios from "axios";
import React, { useEffect } from "react";

function TestPayment() {

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const createRazorpayOrder = (amount) => {
    let data = JSON.stringify({
      amount: amount * 100,
      currency: "INR", //hard coded currency
      plan_id: import.meta.env.VITE_TEST_PLAN_ID,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/users/subscription/Place-order",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + import.meta.env.VITE_SAMLE_JWT_TOKEN,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.status === 200) handleRazorpayScreen(response.data.amount);
        else alert("Some error at creating order");
      })
      .catch((error) => {
        console.log("error at", error);
      });
  };

  const handleRazorpayScreen = async (amount) => {
    const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Some error at razorpay screen loading");
      return;
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/users/subscription/varify-subscription",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + import.meta.env.VITE_SAMLE_JWT_TOKEN,
      },
    };

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: amount,
      currency: "INR",
      name: "papaya coders",
      description: "payment to papaya coders",
      image: "https://papayacoders.com/demo.png",
      handler: function (response) {
        console.log(response);
        config.data = JSON.stringify(response.data);
        config.data.plan_id = import.meta.env.VITE_TEST_PLAN_ID;
        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            if (response.status === 200)
              clg("Payment successfull ,confirmed by server");
            else alert("Some error at updating order");
          })
          .catch((error) => {
            console.log("error at", error);
          });
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9772883374",
      },
      theme: {
        color: "#F4C430",
      },
    };
    console.log(options);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // const paymentFetch = (e) => {
  //   e.preventDefault();

  //   const paymentId = e.target.paymentId.value;

  //   axios
  //     .get(`http://localhost:8000/api/users/subscription/payment/${paymentId}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setResponseState(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error occures", error);
  //     });
  // };

  // useEffect(() => {
  //   let data = JSON.stringify({
  //     amount: amount * 100,
  //   })

  //   let config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: `http://localhost:5000/capture/${responseId}`,
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     data: data
  //   }

  //   axios.request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data))
  //   })
  //   .catch((error) => {
  //     console.log("error at", error)
  //   })
  // }, [responseId])
  return (
    <div className="App">
      <button onClick={() => createRazorpayOrder(1)}>Payment of 1 Rs.</button>
    </div>
  );
}

export default TestPayment;
