
const setSkeleton = async (name,  html, that) => {
  
    if (that.$store.state.isSke) {
        const childNode = document.createElement('div')
        childNode.id = `skeleton_${name}`
        childNode.style = "position: fixed;top: 0; z-index: 10000;background: #fff"
        childNode.innerHTML = html
        const appDOM = document.body
        appDOM.insertBefore(childNode,  appDOM.childNodes[0])
        document.getElementById(`skeleton_${name}`).style.display = 'inline'

    }


}

const removeSkeleton = (name, time) => {
    time = time? time : 300
    setTimeout(() => {
        const homeSle = document.getElementById(`skeleton_${name}`);
        if (homeSle) {
            homeSle.remove()
        }
    }, time)

}



export {
    setSkeleton,
    removeSkeleton
}
