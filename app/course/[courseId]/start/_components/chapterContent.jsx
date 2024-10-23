import React from 'react'
import YouTube from 'react-youtube'
import ReactMarkdown from 'react-markdown'
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
const ChapterContent = ({ chapter, content }) => {

    return (
        <div className='p-10 text-gray-200 '>
            <h2 className='font-medium text-2xl'>{chapter?.['Chapter Name']}</h2>
            <p className='text-gray-300'>{chapter?.About}</p>
            {content ? <div className='flex justify-center my-6'>

                <YouTube
                    videoId={content?.videoId}
                    opts={opts}
                />
            </div> : <div className='min-h-screen'>
                Select The Chapter to Start Learning..
            </div>}
            <div>
                {content?.content?.map((item, index) => {
                    return (
                        <div key={index} className='p-5 mb-3 bg-gray-700 rounded-lg'>
                            <h2 className='font-medium text-lg '>{item?.title}</h2>

                            <ReactMarkdown>{item?.explanation}</ReactMarkdown>
                            {item?.code && <div className='p-4 bg-black text-white rounded-md mt-3'>
                                <pre>
                                    <code>{item?.code}</code>
                                </pre>
                            </div>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChapterContent