import { Thead } from "../Thead"
import { Tbody } from "../Tbody"
import { Box } from "../Box"

export const BoxTable = ({ products }) => {
    return (
        <Box className="overflow-x-auto bg-white rounded-lg shadow">
            <Box className="p-4">
                <Box className="overflow-x-auto bg-white rounded-lg shadow">
                    <table className="min-w-full border-collapse text-sm">
                        <Thead columns={['Nome', 'Preço']} />
                        <Tbody products={products} />
                    </table>
                </Box>
            </Box>
        </Box>
    )
}