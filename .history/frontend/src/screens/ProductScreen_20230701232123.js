import { useParams } from 'react-router-dom'

function ProductScreen () {

    const params = useParams()
    const { slug } = params
    return (
        <div>

        </div>
    );
};

export default ProductScreen;