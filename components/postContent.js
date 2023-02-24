import React from 'react'

const PostContent = ({ content }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text
        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>)
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>)
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>)
            }


        }

        switch (type) {
            case 'heading-one':
                return <h1 key={index} className='text-3xl font-semibold mb-4'>{modifiedText.map((item, i) => <span key={i}>{item}</span>)}</h1>
            case 'heading-two':
                return <h2 key={index} className='text-2xl font-semibold mb-4'>{modifiedText.map((item, i) => <span key={i}>{item}</span>)}</h2>
            case 'heading-three':
                return <h3 key={index} className='text-xl font-semibold mb-4'>{modifiedText.map((item, i) => <span key={i}>{item}</span>)}</h3>
            case 'heading-four':
                return <h4 key={index} className='text-lg font-semibold mb-4'>{modifiedText.map((item, i) => <span key={i}>{item}</span>)}</h4>
            case 'heading-five':
                return <h5 key={index} className='text-md font-semibold mb-4'>{modifiedText.map((item, i) => <span key={i}>{item}</span>)}</h5>
            case 'paragraph':
                return <p key={index} className=' mb-8'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
            case 'image':
                return <div key={index} className='w-full md:w-[40vw] my-4'>
                    <img src={obj.src} className='w-full object-cover' />
                </div>
            case 'code-block':
                return <div key={index} className='bg-black opacity-90 p-5 text-blue-600 font-extralight'><pre ><code className=' mb-8'>{modifiedText.map((item, i) => <span key={i}>{item}</span>)}</code></pre></div>
            default:
                return modifiedText;


        }
    }
    return (
        <div>
            {content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
                return getContentFragment(index, children, typeObj, typeObj.type)
            })}
        </div>
    )
}

export default PostContent