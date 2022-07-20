function FeaturedItem(props) {
    return (
        <div className="col-xl-3 col-md-12 col-sm-12 col-12 px-5 text-center">
          <img className="" src={`../../assets/images/${props.image}`} />
          <h3 className="pt-4 pb-3">{props.title}</h3>
          <p>{props.desc}</p>
        </div>
    )
}

export default FeaturedItem