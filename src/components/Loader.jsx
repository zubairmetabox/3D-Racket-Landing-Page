import './Loader.css';

export function Loader() {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <div className="loader-spinner">
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                </div>
                <h2 className="loader-text">Loading Experience</h2>
                <p className="loader-subtext">Preparing your racket...</p>
            </div>
        </div>
    );
}
