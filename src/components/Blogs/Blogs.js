import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container>
                <h3>১। contex api কি? এটা কিভাবে কাজ করে?</h3>
                <p><span className='fw-bold'>উত্তর:</span> রিঅ্যাক্ট এ সাধারণত একটা কম্পোনেন্ট থেকে আরেকটা কম্পোনেন্ট এ ডাটা সেন্ড করে। সেক্ষেত্রে একটা কম্পোনেন্ট এর ডাটা আরেকটা চাইল্ড কম্পোনেন্ট এ প্রপস হিসাবে পাঠাতে হয়। এভাবে ডাটা পাঠানো কে props drilling বলে।  কিন্তু সমস্যাটা হল মাঝে এমন অনেক কম্পোনেন্ট থাকতে পারে যাদের আসলে এই ডাটা টা দরকার নেই, শুধু চাইল্ড কে পাঠানোর জন্য তাকে props এর মাধ্যমে এই ডাটা টা নেওয়া লাগছে।  Context API একদম টপ লেভেলে একটা স্ট্যাট তৈরী করে, এবং আপনি পরে চাইলে যেকোনো চাইল্ড কম্পোনেন্টই সেই ডাটা অ্যাক্সেস করতে পারবেন, পেরেন্ট কম্পোনেন্টকে কোনোরকম বিরক্ত না করেই। এটা অনেক সিম্পল। এটা ব্যাবহারে খুড়ে খুড়ে সব কম্পোনেন্ট এ প্রপস হিসাবে পাস করে ডাটা নিতে হয় না। এটার মাধ্যমে ফাংশন,অ্যারে,অবজেক্ট,স্ট্রীং ইত্যাদি পাঠানো যায়।</p>
                <h3>২। Semantic tag কি?</h3>
                <p><span className='fw-bold'>উত্তর:</span> এইচটিএমএল মূলত একটি মার্কআপ ল্যাঙ্গুয়েজ হিসাবে তৈরি করা হয়েছিল। ইন্টারনেট যত বেড়েছে  তার চাহিদা পরিবর্তিত হয়েছে। ডিজাইন করা লেআউটগুলির ব্যবহার অগ্রগতির সাথে সাথে, প্রোগ্রামাররা div এর মত একটি জেনেরিক "নন-সিমেন্টিক" ট্যাগ ব্যবহার করা শুরু করে। তারা প্রায়শই এই উপাদানগুলিকে তাদের উদ্দেশ্য বর্ণনা করার জন্য একটি ক্লাস বা আইডি বৈশিষ্ট্য দেয়। উদাহরণস্বরূপ, header এর পরিবর্তে এটি প্রায়ই div class="header" হিসাবে লেখা হত। semantic tag HTML5 এর ট্যাগ। সিমানটিক ট্যাগ হলো মিনিংফুল ট্যাগ। অর্থাৎ ট্যগের নাম শুনে অনেকটা বোঝা যায় কি জন্য ব্যাবহার হবে সেটা। অর্থ বোধক ট্যাগ। যেমন nav ব্যাবহার করি ন্যাভবার তৈরী করার জন্য, header ব্যাবহার করি হেডারে কিছু করার জন্য। এছাড়া ও কিছু সিমানটিক ট্যাগ রয়েছে। যেমন: 
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                main,
                mark,
                section, ইত্যাদি।
                 </p>
            </Container>
        </div>
    );
};

export default Blogs;