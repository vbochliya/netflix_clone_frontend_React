const Message = ({ ErrorMessage, successMessage }) => {
  return (
    <>
      <span style={{ margin: "5px 5px" ,height:"50%",width:"100%"}}>{ErrorMessage}</span>
      <span style={{ margin: "5px 5px",height:"50%",width:"100%" }}>{successMessage}</span>
    </>
  );
};
export default Message;
