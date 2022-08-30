import style from "../styles/Resume.module.css"

export default function Resume() {
    return (
        <div className={style.ResumeContent}>
            <h1>August 2022 Resume</h1>
            <a href="AG_Aug_Resume.pdf">
                <img src="Resume.png"/>
            </a>
        </div>
    )
}