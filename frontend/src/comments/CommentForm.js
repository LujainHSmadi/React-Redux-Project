import { useState } from "react";
import { useEffect } from "react";
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  }; 
  const [visible, setVisible] = useState('none');
   

  useEffect(() => {
      if (JSON.parse(localStorage.getItem("user"))=='2')   
      setVisible('none')
      else if (JSON.parse(localStorage.getItem("user")).logged_user.id=='1') 
      { 
          setVisible('block')
      }  
        
  }, []);    
 

  return (
    <form style={{display:visible}} onSubmit={onSubmit}>
     <span> <input style={{width:'400px',}} placeholder="Add a replay"
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> 
      <button  className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button></span>
      {hasCancelButton && (
        <button 
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
