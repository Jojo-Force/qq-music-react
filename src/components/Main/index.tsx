import SectionPlaylistRecommendation from "@/components/Sections/SectionPlaylistRecommendation";
import SectionNewSong from "../Sections/SectionNewSong";
import SectionRecommend from "../Sections/SectionRecommend";
import SectionNewCD from "../Sections/SectionNewCD";
import SectionRating from "../Sections/SectionRating";

const Main =()=>{
    return (
        <main>
            <SectionPlaylistRecommendation/>
            <SectionNewSong/>
            <SectionRecommend/>
            <SectionNewCD/>
            <SectionRating/>
            {/*<SectionHero/>*/}
            {/*<SectionFeatured/>*/}
            {/*<SectionHow/>*/}
            {/*<SectionMeals/>*/}
            {/*<SectionTestimonials/>*/}
            {/*<SectionPricing/>*/}
            {/*<SectionCTA/>*/}
        </main>
    )
}

export default Main;