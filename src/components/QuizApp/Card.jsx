

export default function Card({ data, currentQuestion, handleAnswer }) {

    return (
        <div className="card">
            <p>{currentQuestion + 1}/{data.length}</p>
            <h2>{data[currentQuestion].question}</h2>
            <ul>
                {
                    data[currentQuestion].options.map(
                        (element,index) => {
                            return(
                                <li key={index}
                                    onClick={ () => {handleAnswer(element.isCorrect)} }>{element.answer}</li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}