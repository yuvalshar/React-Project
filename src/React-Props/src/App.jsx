import Student from './Student.jsx'

function App() {
    return(
        <>
            <Student name = "Yuval Shar" age = {14} isStudent = {true}/>
            <Student name = "Gil Shwed" age = {56} isStudentent = {false}/>
            <Student name = "Amit Shar" age = {49} isStudent = {false}/>
            <Student name = "Tim Cook" age = {63} isStudent = {false}/>
            <Student/>
        </>
    );
}

export default App;