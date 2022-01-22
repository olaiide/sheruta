import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MultipleImgSelector from '../../../components/MultipleImgSelector/MultipleImgSelector'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import PropertyService from '../../../services/PropertyService'
import { storage } from '../../../Firebase'
import firebase from 'firebase'
import { v4 as Uid } from 'uuid'
import { useEffect } from 'react'
import { Modal, Button } from 'antd'

const uid = Uid()
const img_limit = 4

export default function CreatePropertyForm() {
	const { categories, amenities, status, paymentTypes, services } = useSelector(
		(state) => state.view
	)
	const { agent } = useSelector((state) => state.auth)
	const [imageFiles, setImageFiles] = useState([])
	const [name, setName] = useState(null)
	const [bedroom, setBedroom] = useState(null)
	const [bathroom, setBathroom] = useState(null)
	const [toilet, setToilet] = useState(null)
	const [price, setPrice] = useState(null)
	const [description, setDescription] = useState(null)
	const [statu, setStatu] = useState(null)
	const [sittingroom, setSittingRoom] = useState(null)
	const [image_urls, set_image_urls] = useState([])
	const [google_location, setGoogleLocation] = useState(null)
	const [location, setLocation] = useState(null)
	const [payment_type, setPaymentType] = useState(null)
	const [service, setService] = useState(null)
	const [used, setUsed] = useState(false)
	const [categorie, setCategorie] = useState(null)
	const [state, setState] = useState(null)
	const [_amenities, setAmenities] = useState([])
	const [legal_fee, setLegalFee] = useState(null)
	const [agency_fee, setAgencyFee] = useState(null)
	const [caution_fee, setCautionFee] = useState(null)
	const [loading, setLoading] = useState(false)
	const [progress, setProgress] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [message, setMessage] = useState(null)

	const sendToDB = async (e) => {
		setMessage('Submitting..')
		setLoading(true)
		let data = {
			name,
			bedroom,
			bathroom,
			toilet,
			price,
			description,
			statu,
			sittingroom,
			image_urls,
			google_location,
			location,
			payment_type,
			service,
			used,
			categorie,
			state,
			amenities: _amenities,
			legal_fee,
			agency_fee,
			caution_fee,
			uid,
			agent: agent.id,
			state: agent?.state,
			country: agent?.country,
		}
		try {
			const res = await PropertyService.uploadProperty(data)
			console.log('res --', res.data)
			setLoading(false)
			setMessage('Property has been submitted')
			setTimeout(() => {
				setShowModal(false)
			}, 4000)
		} catch (error) {
			setLoading(false)
			setMessage('There was an error, please try again')
			setTimeout(() => {
				setShowModal(false)
			}, 4000)
			console.log(error)
			return Promise.reject(error)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setMessage('Uploading Image')
		setLoading(true)
		setShowModal(true)
		imageFiles.map((file, i) => {
			var uploadTask = storage
				.child(`images/properties/${agent.id}/${uid}/image_${i}`)
				.put(file)
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					var progress = Math.floor(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					)
					console.log('Upload is ' + progress + '% done')
					setProgress(progress)
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: // or 'paused'
							console.log('Upload is paused')
							break
						case firebase.storage.TaskState.RUNNING: // or 'running'
							console.log('Upload is running')
							break
					}
				},
				(error) => {
					// Handle unsuccessful uploads
				},
				() => {
					// Handle successful uploads on complete
					// For instance, get the download URL: https://firebasestorage.googleapis.com/...
					uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
						console.log('File available at', downloadURL)
						image_urls.push(downloadURL)
						console.log('LENGTH AFTER URL --', image_urls.length)
						if (image_urls.length === img_limit) {
							sendToDB()
						}
					})
				}
			)
		})
	}

	useEffect(() => {
		if (image_urls.length === img_limit) {
			sendToDB()
		}
		console.log('LENGTH --', image_urls.length)
		console.log('URLS ===', image_urls)
	}, [image_urls])

	return (
		<div className="row">
			{showModal && (
				<div
					id="myModal"
					className={`modal fade ${showModal && 'show'} pt-5`}
					tabindex="-1"
					aria-labelledby="myModalLabel"
					data-bs-scroll="true"
					aria-modal="true"
					role="dialog"
					style={{
						display: 'block',
						paddingLeft: '0px',
						position: 'absolute',
						backgroundColor: '#000408a1',
						overflow: 'hidden',
					}}
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body text-center">
								<h5>{message}</h5>
								{/* <p>
								Cras mattis consectetur purus sit amet fermentum. Cras justo
								odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
								risus, porta ac consectetur ac, vestibulum at eros.
							</p> */}
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="col-12">
				<div className="card">
					<div className="card-header">
						<h2 className="card-title">Property Information</h2>
						<p className="card-title-desc">Fill all information below</p>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-sm-6">
									<div className="mb-3">
										<label for="title">Title</label>
										<input
											required
											maxLength={90}
											id="title"
											name="title"
											type="text"
											className="form-control"
											value={name}
											placeholder="Newly built 3 bedroom flat"
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className="row">
										<div className="col-md-4">
											<div className="mb-3">
												<label for="bedrooms">Bedrooms</label>
												<input
													required
													id="bedroom"
													name="bedroom"
													type="number"
													className="form-control"
													value={bedroom}
													onChange={(e) => setBedroom(parseInt(e.target.value))}
												/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mb-3">
												<label for="sittingroom">Sitting Rooms</label>
												<input
													required
													id="sittingroom"
													name="sittingroom"
													type="number"
													className="form-control"
													value={sittingroom}
													onChange={(e) =>
														setSittingRoom(parseInt(e.target.value))
													}
												/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mb-3">
												<label for="toilet">Toilets</label>
												<input
													required
													id="toilet"
													name="toilet"
													type="number"
													className="form-control"
													value={toilet}
													onChange={(e) => setToilet(parseInt(e.target.value))}
												/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="mb-3">
												<label for="bathroom">Bathrooms</label>
												<input
													required
													id="bathroom"
													name="bathroom"
													type="number"
													className="form-control"
													value={bathroom}
													onChange={(e) =>
														setBathroom(parseInt(e.target.value))
													}
												/>
											</div>
										</div>
									</div>
									<label className="text-muted">Location</label>
									<hr className="mt-1" />
									<div className="row">
										<div className="col-md-12">
											<div className="mb-3">
												<label for="bathrooms">Area</label>
												<GooglePlacesAutocomplete
													apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY}
													apiOptions={{
														language: 'en',
														region: 'ng',
													}}
													selectProps={{
														// props.state.location,
														className: 'border text-black',
														onChange: (e) => {
															setLocation(e.label)
															setGoogleLocation(e)
														},
														placeholder: 'Eg: Yaba, Lekki, Surulere',
													}}
													autocompletionRequest={{
														componentRestrictions: {
															country: ['ng'],
														},
													}}
												/>
											</div>
										</div>
									</div>
									<label className="text-muted">Money Part</label>
									<hr className="mt-1" />
									<div className="row">
										<div className="col-md-6">
											<div className="mb-3">
												<label for="bathrooms">Rent</label>
												<input
													required
													id="price"
													name="price"
													type="number"
													className="form-control"
													value={price}
													onChange={(e) => setPrice(parseInt(e.target.value))}
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="mb-3">
												<label for="bathrooms">Agency Fee</label>
												<input
													required
													id="price"
													name="price"
													type="number"
													className="form-control"
													value={agency_fee}
													onChange={(e) =>
														setAgencyFee(parseInt(e.target.value))
													}
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="mb-3">
												<label for="bathrooms">Caution Fee</label>
												<input
													required
													id="price"
													name="price"
													type="number"
													className="form-control"
													value={caution_fee}
													onChange={(e) =>
														setCautionFee(parseInt(e.target.value))
													}
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="mb-3">
												<label for="bathrooms">Legal Fee</label>
												<input
													required
													id="price"
													name="price"
													type="number"
													className="form-control"
													value={legal_fee}
													onChange={(e) =>
														setLegalFee(parseInt(e.target.value))
													}
												/>
											</div>
										</div>
									</div>
								</div>

								<div className="col-sm-6">
									<div className="mb-3">
										<label className="control-label">Type</label>
										<div className="card-body p-0  pb-2">
											<div className="d-flex flex-wrap gap-2">
												{categories.map((val) => {
													return (
														<button
															type="button"
															disabled={loading}
															onClick={() => setCategorie(val)}
															className={`btn ${
																categorie === val
																	? 'btn-primary'
																	: 'border-primary'
															}  waves-effect waves-light`}
														>
															{val?.name}
														</button>
													)
												})}
											</div>
										</div>
									</div>

									<div className="mb-3">
										<label className="control-label">Status</label>
										<div className="card-body p-0  pb-2">
											<div className="d-flex flex-wrap gap-2">
												{status.map((val) => {
													return (
														<button
															type="button"
															disabled={loading}
															onClick={() => setStatu(val)}
															className={`btn ${
																statu === val ? 'btn-primary' : 'border-primary'
															}  waves-effect waves-light`}
														>
															{val?.name}
														</button>
													)
												})}
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label className="control-label">Payment Type</label>
										<div className="card-body p-0  pb-2">
											<div className="d-flex flex-wrap gap-2">
												{paymentTypes.map((val) => {
													return (
														<button
															type="button"
															disabled={loading}
															onClick={() => setPaymentType(val)}
															className={`btn ${
																payment_type === val
																	? 'btn-primary'
																	: 'border-primary'
															}  waves-effect waves-light`}
														>
															{val?.name}
														</button>
													)
												})}
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label className="control-label">Service</label>
										<div className="card-body p-0  pb-2">
											<div className="d-flex flex-wrap gap-2">
												{services.map((val) => {
													return (
														<button
															type="button"
															disabled={loading}
															onClick={() => setService(val)}
															className={`btn ${
																service === val
																	? 'btn-primary'
																	: 'border-primary'
															}  waves-effect waves-light`}
														>
															{val?.name}
														</button>
													)
												})}
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label className="control-label">Amenities</label>
										<div className="card-body p-0  pb-2">
											<div className="d-flex flex-wrap gap-2">
												{amenities.map((val) => {
													return (
														<button
															type="button"
															disabled={loading}
															onClick={() => {
																if (_amenities.includes(val)) {
																	setAmenities(
																		_amenities.filter((x) => x !== val)
																	)
																} else {
																	setAmenities([..._amenities, val])
																}
															}}
															className={`btn ${
																_amenities.includes(val)
																	? 'btn-primary'
																	: 'border-primary'
															}  waves-effect waves-light`}
														>
															{val?.name}
														</button>
													)
												})}
											</div>
										</div>
									</div>
									<div className="mb-3">
										<label for="productdesc">
											Tell us about this apartment
										</label>
										<textarea
											className="form-control"
											required
											disabled={loading}
											id="productdesc"
											maxLength={490}
											rows="7"
											showCount
											value={description}
											onChange={(e) => setDescription(e.target.value)}
										/>
									</div>
								</div>
							</div>
							<label className="mt-3">Images</label>
							<hr className="mt-1" />
							<MultipleImgSelector
								limit={img_limit}
								files={imageFiles}
								onChange={(e) => setImageFiles([...imageFiles, e])}
								removeFile={(e) => {
									setImageFiles(imageFiles.filter((x) => x !== e))
								}}
							/>
							<hr />
							<div className="d-flex flex-wrap gap-2">
								<button
									type="submit"
									className="btn btn-primary waves-effect waves-light"
								>
									Save Changes
								</button>
								<button
									type="button"
									className="btn btn-secondary waves-effect waves-light"
								>
									Cancel
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
