import { useState, Suspense, useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../sections/Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002; // smooth rotation
    }
  });

  return <primitive ref={earthRef} object={earth.scene} scale={2.5} />;
};

const EarthCanvas = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [5, 3, 5], fov: 45 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} autoRotate={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Akhil",
          from_email: formData.email,
          to_email: "akhilesh7753849928sahani@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center c-space section-spacing gap-10">
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color="#ffffff" refresh />

      {/* Form */}
      <div className="flex-1 w-full max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Akhilesh Nishad"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="Akhil@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>

      {/* Earth */}
      <div className="flex-1 w-full h-[300px] md:h-[500px]">
        <EarthCanvas />
      </div>
    </section>
  );
};

export default Contact;
