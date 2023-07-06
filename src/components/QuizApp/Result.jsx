
export default function Result({ data, score, handleRestart }){

    return (
        <div className="card">
            <h2>Result</h2>
            <p>You got total score of {score} out of {data.length}</p>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}