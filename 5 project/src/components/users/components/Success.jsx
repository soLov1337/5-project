import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img className='imgsuccess' src="https://img.icons8.com/officel/344/approval.png" width={150} alt="Success" />
      <h3 className='h3success'>Успешно!</h3>
      <p className='psuccess'>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};