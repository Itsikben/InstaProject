var imgs = [1,2]

function getImgs() {
    return new Promise.resolve(imgs);
}

export default {
    getImgs
}