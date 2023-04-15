import { MdCheck } from 'react-icons/md'

const CheckedSentence = ({sentence}) => { 
    return (
        <>
            <div className='flex justify-start'>
                <MdCheck className='text-2xl mr-2' />
                <p>{sentence}</p>
            </div>
        </>
    )
}

export default CheckedSentence;