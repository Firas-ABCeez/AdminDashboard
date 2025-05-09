// EXTERNAL STYLES
import { imgCoverSectionStyle } from "@/styles/auth/styles.js";

export default function ImgCoverSection() {

    return (
        // Right Section: (contains the background-img cover)
        <div className={imgCoverSectionStyle} style={{ backgroundImage: 'url("/images/auth-background.png")' }}></div>
    )
}
