function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <embed src="Resume.pdf" type="application/pdf" id="resume" />
      <a href="Resume.pdf" download={Resume.pdf}>
        <button>Download Resume</button>
      </a>
    </>
  )
}

export default Resume;