import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <h3>১। contex api কি? এটা কিভাবে কাজ করে?</h3>
                <p><span className='fw-bold'>উত্তর:</span> রিঅ্যাক্ট এ সাধারণত একটা কম্পোনেন্ট থেকে আরেকটা কম্পোনেন্ট এ ডাটা সেন্ড করে। সেক্ষেত্রে একটা কম্পোনেন্ট এর ডাটা আরেকটা চাইল্ড কম্পোনেন্ট এ প্রপস হিসাবে পাঠাতে হয়। এভাবে ডাটা পাঠানো কে props drilling বলে।  কিন্তু সমস্যাটা হল মাঝে এমন অনেক কম্পোনেন্ট থাকতে পারে যাদের আসলে এই ডাটা টা দরকার নেই, শুধু চাইল্ড কে পাঠানোর জন্য তাকে props এর মাধ্যমে এই ডাটা টা নেওয়া লাগছে।  Context API একদম টপ লেভেলে একটা স্ট্যাট তৈরী করে, এবং আপনি পরে চাইলে যেকোনো চাইল্ড কম্পোনেন্টই সেই ডাটা অ্যাক্সেস করতে পারবেন, পেরেন্ট কম্পোনেন্টকে কোনোরকম বিরক্ত না করেই। এটা অনেক সিম্পল। এটা ব্যাবহারে খুড়ে খুড়ে সব কম্পোনেন্ট এ প্রপস হিসাবে পাস করে ডাটা নিতে হয় না। এটার মাধ্যমে ফাংশন,অ্যারে,অবজেক্ট,স্ট্রীং ইত্যাদি পাঠানো যায়।</p>
            </Container>
        </div>
    );
};

export default Blogs;