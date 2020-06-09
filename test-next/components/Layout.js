import Link from 'next/link'
import Head from 'next/head'

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>User Card App</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
            </Head>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
                    <div className="container">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link href="/">
                                    <a className="nav-link" >Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link" >About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='container'>
                    {props.children}
                </div>
            </div>

        </>
    )
}

export default Layout