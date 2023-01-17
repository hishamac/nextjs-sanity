import Image from "next/image";

function StudioCustomLogo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center space-x-2">
            <Image 
            className="rounded-full object-cover"
            height={50}
            width={50}
            src="https://cdn.vectorstock.com/i/1000x1000/25/50/yellow-square-geometric-texture-background-vector-16792550.webp"
            alt="logo"
            />
            <>{renderDefault(props)}</>
        </div>
    );
}

export default StudioCustomLogo;