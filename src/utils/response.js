module.exports = () => {
    const successMessage = (code, msg, data) => ({
        code: code,
        msg: msg,
        data: data
    });

    const errorMessage = (code, msg) => ({
        code: code,
        msg: msg
    });

    const pagination = (code, msg, data, page, totalItem, size, sortBy, sortType, keyword) => {
        return {
            code: code,
            msg: msg,
            data: data,
            keyword: keyword,
            sortBy: sortBy,
            sortType: sortType,
            paging: {
                page: page,
                totalPages: Math.ceil(totalItem / size),
                totalRows: totalItem,
                rowsPerPage: size
            }
        }
    }

    return {
        successMessage, errorMessage, pagination
    }
}