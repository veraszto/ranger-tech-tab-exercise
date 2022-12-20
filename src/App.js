import React, { useEffect, useState } from 'react'
import TabContent from './components/TabContent'
import logo from './logo.svg'
import './App.css'

function App () {
    const [tabs, setTabs] = useState([])
    useEffect(() => { setTabs(generateTabs()) }, [])

    const generateTabs = () => {
        const builtTabs = []
        const amount = Math.floor(Math.random() * 21)
        if (Math.random() > 0.95) {
            return null
        }
        for (let counter = 0, i = 0; i <= amount; i++) {
            const isUndefined = Math.random() > 0.8

            let title = `Section ${counter}`
            let content = `Section ${counter} content`

            if (isUndefined === true) {
                title = null
                content = undefined
            }

            if (Math.random() > 0.9) {
                builtTabs.push(null)
                continue
            }

            const aTab = { title, content }
            builtTabs.push(aTab)
            if (isUndefined === false) {
                counter++
            }
        }

        return builtTabs
    }

    return (
        <div className="App">
            <div style={{ padding: '2em' }}>
                <section>Please click regenerate button bellow multiple times and check the built tabContent working
                </section>
                <button
                    className="regenerate"
                    onClick= { () => { setTabs(generateTabs()) } }
                >Randomly regenerate tabs
                </button>
                <textarea readOnly rows={20} value={JSON.stringify(tabs, undefined, 2)}>
                </textarea>
                <TabContent tabs={tabs} />
            </div>
        </div>
    )
}

export default App
