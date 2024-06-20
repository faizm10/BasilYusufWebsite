'use client'
import React, { useEffect, useState } from 'react';

type TypewriterProps = {
    messages: string[];
    typingSpeed: number;
};

const Typewriter: React.FC<TypewriterProps> = ({ messages, typingSpeed }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delay, setDelay] = useState(typingSpeed);

    useEffect(() => {
        const current = loopNum % messages.length;
        const fullText = messages[current];
        let typeSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;

        if (!isDeleting && text === fullText) {
            setIsDeleting(true);
            typeSpeed = 5000;
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            typeSpeed = 350;
        }

        const handleTyping = () => {
            setText(currentText => {
                return isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1);
            });
        };

        const timer = setTimeout(handleTyping, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, messages, typingSpeed]);

    return (
        <h1 className="text-gray-700 text-2xl">
            <a className="typewrite">
                <span className="wrap">Hi I am a {text}</span>
            </a>
        </h1>
    );
};

export default Typewriter;
