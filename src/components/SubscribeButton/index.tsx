import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useSession } from '../../hooks/useSession';
import api from '../../services/api';

const SubscribeButton: React.FC = () => {
  const session = useSession();
  const history = useHistory();
  
  const [className, setClassName] = useState('')

  async function handleSubscribe() {
    if(!session){
      setClassName('signIn');
      return;
    }

    if(session.activeSubscription) {
      history.push('/posts');
      return;
    }

    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      console.log(sessionId)
    } catch(err) {}
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className={className}
    >
      Subscribe now
    </button>
  );
}

export default SubscribeButton;