import SectionPlaylistRecommendation from "@/components/Sections/SectionPlaylistRecommendation";
import SectionNewSong from "../Sections/SectionNewSong";
import SectionRecommend from "../Sections/SectionRecommend";
import SectionNewCD from "../Sections/SectionNewCD";
import SectionRating from "../Sections/SectionRating";
import SectionMV from "../Sections/SectionMV";

const Main =()=>{
    return (
        <main>
            <SectionPlaylistRecommendation/>
            <SectionNewSong/>
            <SectionRecommend/>
            <SectionNewCD/>
            <SectionRating/>
            <SectionMV/>
        </main>
    )
}

export default Main;