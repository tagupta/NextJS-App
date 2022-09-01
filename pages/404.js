import Link from 'next/link'

const NotFound = () => {
    return (
        <div classname="not-found">
            <h1>Oooops....</h1>
            <h2>That Page cannot be found.</h2>
            <p>
                Go back to <Link href="/"><a>Homepage</a></Link> 
            </p>
        </div>
    );
}
 
export default NotFound;