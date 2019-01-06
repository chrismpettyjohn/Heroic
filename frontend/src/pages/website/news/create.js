import React from 'react'
import Portlet from 'components/reusable/portlet'

class Create extends React.Component {

	state = {
		step: 1,
		article: {
			title: '',
			category: 1,
			description: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			...this.state,
			article: {
				...this.state.article,
				[event.target.name]: event.target.value
			}
		})
	}

	goBack = () => {
		this.setState({
			...this.state,
			step: (this.state.step-1)
		})
	}

	goForward = () => {
		this.setState({
			...this.state,
			step: (this.state.step+1)
		})
	}

	render() {
		const {handleChange, goBack, goForward} = this
		let {step, article} = this.state
		return (
			<Portlet title="Create New Article">
				<div className="row">
					<div className="col-md-8">
						<div className="m-wizard m-wizard--5 m-wizard--info m-wizard--step-first" id="m_wizard">
							<div className="m-wizard__head" style={{marginTop: '-2.5%'}}>
								<div className="m-wizard__nav">
									<div className="m-wizard__steps">
										<div className={`m-wizard__step ${ (step===1) ? 'm-wizard__step--current' : '' }`}>
											<div className="m-wizard__step-info">
												<span className="m-wizard__step-number">
													<span className="m-wizard__step-seq">1.</span>
													<span className="m-wizard__step-label">Basic Details</span>
												</span>
											</div>
										</div>
										<div className={`m-wizard__step ${ (step===2) ? 'm-wizard__step--current' : '' }`}>
											<div className="m-wizard__step-info">
												<span className="m-wizard__step-number">
													<span className="m-wizard__step-seq">2.</span>
													<span className="m-wizard__step-label">Article Content</span>
												</span>
											</div>
										</div>
										<div className={`m-wizard__step ${ (step===3) ? 'm-wizard__step--current' : '' }`}>
											<div className="m-wizard__step-info">
												<span className="m-wizard__step-number">
													<span className="m-wizard__step-seq">3.</span>
													<span className="m-wizard__step-label">Choose An Image</span>
												</span>
											</div>
										</div>
										<div className={`m-wizard__step ${ (step===4) ? 'm-wizard__step--current' : '' }`}>
											<div className="m-wizard__step-info">
												<span className="m-wizard__step-number">
													<span className="m-wizard__step-seq">4.</span>
													<span className="m-wizard__step-label">Confirmation</span>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="m-wizard__form">
								<form className="m-form m-form--label-align-left- m-form--state-" id="m_form">

									<div className="m-wizard__form-step m-wizard__form-step--current">

										<div className="m-form__section" style={{display: (step === 1) ? 'block' : 'none'}}>
											<div className="form-group m-form__group row">
												<label className="col-xl-3 col-lg-3 col-form-label">Title</label>
												<div className="col-xl-9 col-lg-9">
													<input className="form-control m-input" name="title" value={article.title}
													       onChange={handleChange} maxLength={25}/>
													<span className="m-form__help">The name of your news article</span>
												</div>
											</div>

											<div className="form-group m-form__group row">
												<label className="col-xl-3 col-lg-3 col-form-label">Category</label>
												<div className="col-xl-9 col-lg-9">
													<select className="form-control m-input" name="category" value={article.category}
													        onChange={handleChange}>
														<option value={1}>Hotel Updates</option>
														<option value={2}>User Competitions</option>
													</select>
													<span className="m-form__help">The name of your news article</span>
												</div>
											</div>

											<div className="form-group m-form__group row">
												<label className="col-xl-3 col-lg-3 col-form-label">Description</label>
												<div className="col-xl-9 col-lg-9">
													<textarea className="form-control m-input" name="description" rows={4}
													          value={article.description} onChange={handleChange} maxLength={100}/>
													<span className="m-form__help">This is how the post preview will look</span>
												</div>
											</div>
										</div>
									</div>

									<div className="m-form__section" style={{display: (step === 2) ? 'block' : 'none'}}>
										<div className="form-group m-form__group row">
											<label className="col-xl-3 col-lg-3 col-form-label">Article Content</label>
											<div className="col-xl-9 col-lg-9">
												<textarea className="form-control m-input" name="content" rows={10} value={article.content}
												          onChange={handleChange} maxLength={100}/>
												<span className="m-form__help">What is this article about?</span>
											</div>
										</div>
									</div>

									<div className="m-form__section" style={{display: (step === 3) ? 'block' : 'none'}}>
										<p>Image Chooser Here</p>
									</div>

									<div className="m-form__section" style={{display: (step === 4) ? 'block' : 'none'}}>
										<p>u sure??</p>
									</div>

									<div className="m-form__actions m-form__actions">
										<div className="row">
											<div className="col-lg-9"/>
											<div className="col-lg-3">
												<span className="btn btn-secondary m-btn m-btn--custom m-btn--icon" style={{ marginRight: '2%' }} onClick={goBack}>
													<span>
														<i className="la la-arrow-left"></i>
														<span>Back</span>
													</span>
												</span>
												<span className="btn btn-primary m-btn m-btn--csucc m-btn--icon text-white" onClick={goForward}>
													<span>
														<i className="la la-check"></i>
														<span>Continue</span>
													</span>
												</span>
											</div>
										</div>
									</div>


								</form>
							</div>
						</div>
					</div>
					<div className="col-md-4" style={{marginTop: '5%'}}>
						<h4>Preview</h4>
						<div className="row">
							<div className="col-md-3">
								<img src="https://images.habbo.com/web_images/habbo-web-articles/lpromo_gen_amb_1_thumb.png"/>
							</div>
							<div className="col-md-4" style={{marginLeft: '-4.5%'}}>
								<h4>{article.title}</h4>
								<p style={{width: '150px', wordWrap: 'break-word'}}>{article.description}</p>
							</div>
						</div>
					</div>
				</div>
			</Portlet>
		)
	}

}

export default Create