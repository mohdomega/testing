import BlazeNewTrails from '../shared/BlazeNewTrails';
import ContactUs from '../shared/ContactUs';
import BlogsComponent from '../home/Blogs';

export default function Blogs() {
  return (
    <div>
      <BlogsComponent />

      <ContactUs />
      <BlazeNewTrails className="bg-white" />
    </div>
  );
}
