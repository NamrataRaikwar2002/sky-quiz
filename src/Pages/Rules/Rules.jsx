import { Navbar } from '../../Component';
import './Rules.css';

const Rules = () => {
    return(
        <main className="rule_page">
        <Navbar />
        <section className="rule_section">
            <h2 className='page-heading'>Rules</h2>
                <ul className="rules_list">
                    <li className="each_rule">There will be 5 questions in each round.</li>
                    <li className="each_rule">You will have 20 seconds for each question.</li>
                    <li className="each_rule">10 Points for each question.</li>
                    <li className="each_rule">There will be MCQs so there will be only 1 correct answer.</li>
                    <li className="each_rule">No Negative marking for wrong answer.</li>
                </ul>
                <a href=""><button className="btn large_btn">Start</button></a>
        </section>
    </main>
    )

}

export{Rules}
