import { useState } from "react"

const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="border border-black p-2 m-2">
            <h1>{title}</h1>
            <button className="cursor-pointer underline" onClick={() => { isVisible? setIsVisible(false): setIsVisible(true) }}>
                { !isVisible ? 'Show' : 'Hide' }
            </button>
            <p>{isVisible && description}</p>
        </div>
    )
}

const Instamart = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
            
            <Section 
                title="About Instamart"
                description="This is about section of instamart"
            />

            <Section
                title="Items"
                description="This is item section of instamart page"
            />
        </div>
    )
}

export default Instamart;