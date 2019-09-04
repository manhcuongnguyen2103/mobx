import React from 'react'
import '../index.css'
import LinkList from '../components/LinkList';
import ReactDemo from '../components/ReactDemo';
const DemoLinks = [
    {
        title: 'Example',
        link:[
            {
                displayText: 'Source',
                url: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react'
            }
        ]
    },
    {
        title: 'React + Backbone.js',
        link:[
            {
                displayText: 'Demo',
                url: 'http://todomvc.com/examples/react-backbone/'
            },
            {
                displayText: 'Source',
                url: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone'
            }
        ]
    },
    {
        title: 'Scala.js + React',
        link:[
            {
                displayText: 'Demo',
                url: 'http://todomvc.com/examples/scalajs-react/#/'
            },
            {
                displayText: 'Source',
                url: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/scalajs-react'
            }
        ]
    },
    {
        title: 'TypeScript + React',
        link:[
            {
                displayText: 'Demo',
                url: 'http://todomvc.com/examples/typescript-react/#/'
            },
            {
                displayText: 'Source',
                url: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react'
            }
        ]
    },
    {
        title: 'React + Alt',
        link:[
            {
                displayText: 'Demo',
                url: 'http://todomvc.com/examples/react-alt/#/'
            },
            {
                displayText: 'Source',
                url: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-alt'
            }
        ]
    },
]

const ResourcesLinks = [
    {
        displayText: 'Tutorial',
        url: 'https://reactjs.org/tutorial/tutorial.html'
    },
    {
        displayText: 'Philosophy',
        url: 'https://www.quora.com/q/llhoiiinaejsjbmt/React-Under-the-Hood'
    },
    {
        displayText: 'Support',
        url: 'https://reactjs.org/community/support.html'
    },
    {
        displayText: 'Flux architecture example',
        url: 'https://github.com/facebook/flux/tree/master/examples/flux-todomvc'
    }
]

const CommunityLinks = [
    {
        displayText: 'ReactJS on Stack Overflow',
        url: 'https://stackoverflow.com/questions/tagged/reactjs'
    },
    {
        displayText: 'Google Groups Mailing List',
        url: 'https://groups.google.com/forum/#!forum/reactjs'
    },
    {
        displayText: 'IRC',
        url: 'irc://chat.freenode.net/reactjs'
    }
]

const desc1 = 'React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.'

const desc2 = 'If you have other helpful links to share, or find any of the links above no longer work, please'

class LeftCol extends React.Component {
  render() {
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-success">
                <div className="content">
                    <p className="title">React</p>
                    <div className="content">
                        <ReactDemo links = {DemoLinks}/>
                    </div>
                    <div className="content">
                        <blockquote className="content has-background-grey-light"  style={{ borderLeft: '0px' }} > {desc1} </blockquote>
                        <div style={{ textAlign: 'right' }}>
                            <a href='http://facebook.github.io/react'>React</a>
                        </div>
                    </div>
                    <p className="subtitle" >Official Resources</p>
                    <div className="content" >
                        <LinkList links = {ResourcesLinks}/>
                    </div>

                    <p className="subtitle" >Community</p>
                    <div className="content" >
                    <LinkList links = {CommunityLinks}/>
                    </div>
                
                <div className="content" >
                    {desc2}<a href='https://github.com/tastejs/todomvc/issues'>let us know</a>.
                </div>
                </div>
            </article>
        </div>
    )
  }
}

export default LeftCol
