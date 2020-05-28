import React from "react"
import { SectionTitle } from "./Styled"
import { AiOutlineMail } from "react-icons/ai"
// import { MdContentCopy } from "react-icons/md"
import styled from "styled-components"

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
`
const EmailContainer = styled.div`
  margin: 0 auto;
  display: flex;
  /* padding: 10px; */
  /* padding-top: 15px; */
  align-items: center;
  &:hover {
    color: gray;
  }
`

const EmailLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: gray;
  }
`

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
`
// const CopyButton = styled.button`
//   border: none;
//   background-color: inherit;
//   color: black;
//   outline: none;
//   &:hover {
//     color: gray;
//     cursor: pointer;
//   }
// `

const Contact = () => {
  // const [copied, setCopied] = useState(false)

  // const onClickCopy = () => {
  //   const textToCopy = "aichitsuchihira@gmail.com"
  //   navigator.clipboard.writeText(textToCopy)
  //   setCopied(true)
  //   window.setTimeout(() => setCopied(false), 4000)
  // }
  return (
    <div>
      <SectionTitle>Contact</SectionTitle>
      <ContactContainer>
        <Container>
          <EmailLink
            href="mailto: aichitsuchihira@gmail.com"
            style={{ color: "black", textDecoration: "none" }}
          >
            <EmailContainer>
              <AiOutlineMail
                style={{ height: 40, width: 40, marginRight: 20 }}
              />
              <p style={{ marginRight: 20 }}>aichitsuchihira@gmail.com</p>
            </EmailContainer>
          </EmailLink>
          {/* <CopyButton onClick={onClickCopy}>
            <MdContentCopy style={{ height: 25, width: 25 }} />
          </CopyButton> */}
        </Container>
        {/* {copied ? (
          <p style={{ color: "gray", alignSelf: "center" }}>
            Email has been copied to your clipboard
          </p>
        ) : null} */}
      </ContactContainer>
    </div>
  )
}

export default Contact
