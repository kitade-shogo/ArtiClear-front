import { useState } from 'react'
import { Link } from 'react-router-dom'
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
                className="flex justify-center hover:cursor-pointer hover:bg-textLowContrast rounded-3xl border-2 border-textLowContrast"
                onClick={handler}
            >
                <p className="text-textLowContrast hover:text-white text-center text-xl font-semibold px-8 py-2 ">
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
                        <Link
                            to="/terms_of_service"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            利用規約
                        </Link>
                        、
                        <Link
                            to="privacy_policy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            プライバシーポリシー
                        </Link>
                        に同意してログインしてください。
                    </p>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LoginModalWhite
