import { useState, useEffect, useMemo } from "react";
import { db } from "./config";

import { collection, doc, getDoc, onSnapshot, } from "firebase/firestore";
import {  getDownloadURL, getStorage, ref } from "firebase/storage";

export const useCollection = (collectionName = "testimonials") => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const q = collection(db, collectionName);
        setLoading(true);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            setDocuments(documents);
            setLoading(false);
        });
        return unsubscribe;
    }, [collectionName]);

    return { documents, loading };
};

// show firebase images Hook
export const useStorage = (file, trigger = false) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const storage = getStorage();
    const path = `/${file}`;

    const fetchDownloadUrl = useMemo(() => {
        return async () => {
            const storageRef = ref(storage, path);
            setLoading(true);

            try {
                const url = await getDownloadURL(storageRef);
                setImgUrl(url);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
    }, [storage, path]);

    useEffect(() => {
        if (trigger) return;

        fetchDownloadUrl();

        return () => {
            // Cleanup function
            setLoading(false); // Set loading to false to indicate cleanup
        };
    }, [file, trigger, fetchDownloadUrl]);

    return { imgUrl, loading };
};

// get specific data from collection
export const useDoc = (collectionName, docId) => {
    const [document, setDocument] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!docId) return;
        setLoading(true);
        const q = collection(db, collectionName);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id });
            });
            const doc = documents.find((doc) => doc.id === docId);
            setDocument(doc);
            setLoading(false);
        });

        return unsubscribe;
    }, [collectionName, docId]);

    return { document, loading };
};

export const useBlogsData = (blogPaths) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        if (!blogPaths.length) return;
        
        const fetchBlogsData = async () => {
            const promises =blogPaths.map((path) => path ? getDoc(doc(db, path)) : Promise.resolve(null));
            const results = await Promise.all(promises);
            setData(results.map(doc => doc ? doc.data() : null));
            setLoading(false);
        };

        fetchBlogsData();
    }, [blogPaths.length]);

    return { data, loading };
};