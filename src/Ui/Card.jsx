


const Card = ({ image, title, description }) => {
    return (
        <section className={`w-60 px-2 py-2 bg-neutral-800 rounded-xl`}>

            <img src={image} alt="cardImage" className='h-60  w-full rounded-xl object-cover' />
            <h4 className='text-xl text-center mt-2 font-bold bg-gradient-to-r from-[#CCB9B1] to-[#A0583C] bg-clip-text text-transparent'>
                {title}
            </h4>
            <p className="text-sm text-center sm:text-sm md:text-lg text-neutral-700 leading-relaxed">
                {description}
            </p>

        </section>
    )
}

export default Card