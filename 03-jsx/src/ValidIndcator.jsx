const ValidIndicator = () => {
    const isValid = true;
    return (
    <div className="m-8 text-xl flex justify-center">{isValid ? 'valid' : 'not valid'}</div>
    );
};

export default ValidIndicator;