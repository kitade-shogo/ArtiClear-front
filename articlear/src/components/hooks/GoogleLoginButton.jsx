import axios from 'axios'
import { toast } from 'react-toastify'
import useFirebaseAuth from './useFirebaseAuth'
import { FcGoogle } from 'react-icons/fc'

export const handleAxiosError = (err) => {
    let message
    if (axios.isAxiosError(err)) {
        if (err.response) {
            console.error(err.response)
            message = err.response.data?.message || 'サーバーエラー'
        } else if (err.request) {
            console.error(err.request)
            message = 'リクエストエラー'
        } else {
            console.log('Error', err.message)
            console.error(err.config)
            message = err.message
        }
    } else {
        message = String(err)
        console.error(message)
    }
    return message
}

const GoogleSignInButton = () => {
    const { loginWithGoogle } = useFirebaseAuth();

    const signInWithGoogleAndPostIdToken = async () => {
        const user = await loginWithGoogle()
        const idToken = await user?.getIdToken()

        const config = {
            headers: { authorization: `Bearer ${idToken}` },
        }

        try {
            await axios.post('/auth', null, config)
            toast.success('ログインしました')
        } catch (error) {
            const errorMessage = handleAxiosError(error)
            toast.error(errorMessage)
            return null
        }
    }
    
    return (
        <button
            onClick={signInWithGoogleAndPostIdToken}
            className="bg-white text-gray-600 px-4 py-2 rounded-md flex items-center cursor-pointer text-center"
        >
            <FcGoogle />
            Sign in with Google
        </button>
    )
};

export default GoogleSignInButton;
