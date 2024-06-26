"use strict";
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["Published"] = "published";
    QuestionStatus["Draft"] = "draft";
    QuestionStatus["Deleted"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
/*async function getFaqs(req: {
    topicId: number,
    status?: QuestionStatus
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: QuestionStatus
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}*/ 
