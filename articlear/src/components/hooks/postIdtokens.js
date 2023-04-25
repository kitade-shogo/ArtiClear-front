import axios from 'axios';

const postIdtokens = async () => {
    const user = await loginWithGoogle();
    const idToken = await user.getIdToken();

    const config = {
        headers: { authorization: `Bearer ${idToken}` },
    }

    try {
        await axios.post("/auth", null, config)
    } catch (error) {
    }