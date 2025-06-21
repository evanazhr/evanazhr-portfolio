import FadeInSection from '@/components/animation/FadeInSection'
import Contact from '@/components/Contact'

export default function Footer() {
    return (
        <FadeInSection>
            <section className="w-full bg-secondary" >

                <div className=" w-full pb-20 pt-6 md:py-6  px-4 md:px-8 mx-auto container">
                    <div className='flex flex-col w-full justify-center gap-2 items-center'>
                        <Contact withName={true} />
                        <div className="border-t-1 text-center py-4 border-secondary w-full ">
                            @evanazhr
                        </div>
                    </div>
                </div>
            </section>
        </FadeInSection>

    )
}