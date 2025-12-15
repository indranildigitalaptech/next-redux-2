

const Header = ({heading, paragraph}: {heading: string | undefined, paragraph: string | undefined}) => {
    console.log("Header");


    return (
        <>
            <h1 className="text-5xl font-bold text-white mb-2 text-center">{heading}</h1>
            <p className='text-white/80 text-sm text-center mb-8'>{paragraph}</p>
        </>
    )
}

export default Header