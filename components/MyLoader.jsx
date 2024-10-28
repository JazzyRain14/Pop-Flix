import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"
import { Dimensions } from "react-native";

const itemWidth = Dimensions.get('window').width;

const MyLoader = (props) => (
    <ContentLoader
        speed={4}
        width={500}
        height={150}
        viewBox="0 0 476 124"
        backgroundColor="#575757"
        foregroundColor="#211f24"
        {...props}
    >
        <Rect x="0" y="0" rx="0" ry="0" width="240" height="400" />
        <Rect x="220" y="0" rx="0" ry="0" width="240" height="400" />
    </ContentLoader>
)

export default MyLoader

