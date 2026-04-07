import { Col, Row, Typography } from "antd"

const { Paragraph } = Typography

const CopyRight = () => {
    const year = new Date().getFullYear()
  return (
    <footer>        
            <Row>
                <Col span={24} >
                <Paragraph className="text-center py-2 bg-primary text-white mb-0">&copy; {year}. All rights reserved.</Paragraph>
                </Col>
            </Row>        
    </footer>
  )
}

export default CopyRight