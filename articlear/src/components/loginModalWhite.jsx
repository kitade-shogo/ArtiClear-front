import { useState } from 'react'
import { Modal, Text } from '@nextui-org/react'
import GoogleSignInButton from './hooks/GoogleLoginButton'

const LoginModalWhite = () => {
    const [visible, setVisible] = useState(false)
    const handler = () => setVisible(true)

    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
    }

    return (
        <div>
            <div
                className="flex justify-center hover:cursor-pointer"
                onClick={handler}
            >
                <p className="text-textLowContrast text-center text-xl font-semibold px-8 py-2 rounded-3xl border-2 border-textLowContrast">
                    Log in
                </p>
            </div>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        ArtiClearは、技術記事の積読を解消する
                        <br />
                        ブックマーク管理サービスです。
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <GoogleSignInButton />
                </Modal.Body>
                <Modal.Footer>
                    <p>
                        利用規約、プライバシーポリシーに同意してログインしてください。
                    </p>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LoginModalWhite
