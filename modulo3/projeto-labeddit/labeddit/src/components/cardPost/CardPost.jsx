import React from "react";

const CardPost = () => {
  return (
    <div>
      <h1>CardPost</h1>
      <form>
         <label>
         <input
            placeholder="Adicionar se comentário..."
            // type="password"
            // value={password}
            // onChange={onChangePassword}
           />
         </label>
         <button>Responder</button>
      </form>
    </div>
  );
};

export default CardPost;
