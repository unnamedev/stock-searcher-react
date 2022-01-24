import {useEffect, useState} from "react"
import {appFirestore, appStorage, timestamp} from "../firebase.config"
import {formatFileSize} from "../helpers/filesize";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        // references
        const storageRef = appStorage.ref(file.name)
        const collectionRef = appFirestore.collection('images')

        storageRef.put(file).on('state_change', (snap) => {
            setProgress((snap.bytesTransferred / snap.totalBytes) * 100)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            collectionRef.add({
                url,
                createdAt: timestamp(),
                size: formatFileSize(file.size),
                name: file.name,
                date: new Date(file.lastModified).toLocaleDateString('en-EN')
            })
            setUrl(url)
        })
    }, [file])

    return {progress, error, url}
}

export default useStorage

