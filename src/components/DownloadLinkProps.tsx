import React from 'react';

interface DownloadLinkProps {
    href: string;
    downloadFileName: string;
}

const DownloadLink: React.FC<DownloadLinkProps> = ({ href, downloadFileName }) => {
    return (
        <a href={href} download={downloadFileName}>
            Скачать файл
        </a>
    );
};

export default DownloadLink;